import { BlockConfig } from "@/components/primaryWebsite/types/Config";
import { BlockHtmlGenerator } from "./BlockHtmlGenerator";
import { BlockType } from "./types/Blocks";
import { ReactNode } from "react";

export class BlockGenerator {
  container: any;
  config: BlockConfig;
  private _dirty: boolean;
  BlockType: BlockType;
  private _elements: any;
  private _template: any;
  private _update: () => void;

  constructor(container: ReactNode, config: BlockConfig, blockType: BlockType) {
    this.container = container;
    this.config = config;
    this._dirty = false;
    this.BlockType = blockType;
    this._elements = {};
    this._template = document.createElement("template");

    // Initialize with fragment-based render
    // this._render();

    this._update = () => {
      if (!this._dirty) return;
      if (this._needsElementCreation()) {
        this._render();
        return;
      }
      this._performDOMUpdates();
      this._dirty = false;
    };
  }

  updateConfig(newConfig: BlockConfig) {
    this.config = { ...this.config, ...newConfig };
    this._dirty = true;
    requestAnimationFrame(this._update);
  }

  _render() {
    // 1. Generate HTML into template
    this._template.innerHTML = new BlockHtmlGenerator(
      this.config,
      this.BlockType
    ).Generate();

    // 2. Create fragment from template
    const fragment = document.createDocumentFragment();
    fragment.append(...this._template.content.children);

    // 3. Clear and mount (single DOM operation)
    this.container.innerHTML = "";
    this.container.appendChild(fragment);

    this._cacheElements();
  }

  _cacheElements() {
    this._elements = {}; // Reset cached elements

    // Iterate through each key in config.contents
    Object.entries(this.config.contents).forEach(([key, content]) => {
      if (content.render && content.id) {
        // Dynamically add to _elements using the key (e.g., "frmTitle")
        this._elements[key] = this.container.querySelector(`#${content.id}`);
      }
    });
  }

  _needsElementCreation() {
    return Object.entries(this.config.contents).some(([key, content]) => {
      const elementExists = !!this._elements[key];
      return content.render && !elementExists;
    });
  }

  _performDOMUpdates() {
    // Track keys of elements to remove
    const elementsToRemove: any = [];

    // Single pass through all cached elements
    Object.entries(this._elements).forEach(([key, element]) => {
      const content: any = this.config.contents[key];

      // Handle removal case
      if (!content || content.render === false) {
        if ((element as any)?.parentNode) {
          (element as any).remove();
          elementsToRemove.push(key);
        }
        return;
      }

      // Handle input elements
      if (element instanceof HTMLInputElement) {
        if (element.value !== content.value) {
          const wasFocused = document.activeElement === element;
          const cursorPos = wasFocused ? element.selectionStart : 0;

          element.value = content.value || "";
          if (wasFocused) {
            element.setSelectionRange(cursorPos, cursorPos);
          }
        }
      }
      // Handle other HTML elements
      else if (element instanceof HTMLElement) {
        // Update text content if changed
        if (
          content.text !== undefined &&
          element.textContent !== content.text
        ) {
          element.textContent = content.text;
        }

        // Update class if changed
        if (content.className && element.className !== content.className) {
          element.className = content.className;
        }

        // Update other attributes if needed
        if (content.attributes) {
          Object.entries(content.attributes).forEach(([attr, value]) => {
            if (element.getAttribute(attr) !== value) {
              element.setAttribute(attr, value as any);
            }
          });
        }
      }
    });

    // Clean up removed elements from cache
    elementsToRemove.forEach((key: any) => {
      delete this._elements[key];
    });
  }
}
