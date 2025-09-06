"use client";

import { useEffect, useRef, useState } from "react";
import { BlockGenerator } from "@/components/blocks/BlockGenerator";
import { BlockConfig } from "./types/Config";
import { BlockType } from "./types/Blocks";
// import parse from "html-react-parser";
// import { BlockHtmlGenerator } from "./BlockHtmlGenerator";

export default function ReactBlockLoader({
  config,
  blockType,
}: {
  config: BlockConfig;
  blockType: BlockType;
}) {
  const containerRef = useRef(null);
  const blockGeneratorRef = useRef<any>(null);
  const [blockConfig, setBlockConfig] = useState(config);
  if (blockType == BlockType.HERO1) {
    (globalThis as any).heroPureConfig = config;
    (globalThis as any).heroBlockConfig = blockConfig;
    (globalThis as any).setHeroBlockConfig = setBlockConfig;
  }
  if (blockType == BlockType.OUR_TEAM1) {
    (globalThis as any).ourteamPureConfig = config;
    (globalThis as any).ourteamBlockConfig = blockConfig;
    (globalThis as any).setOurteamBlockConfig = setBlockConfig;
  }
  useEffect(() => {
    console.log("Config changed:", config);
    setBlockConfig(config);
    blockGeneratorRef?.current?.updateConfig(config);
  }, [config]);

  useEffect(() => {
    if (!containerRef.current) return;

    if (!blockGeneratorRef.current) {
      blockGeneratorRef.current = new BlockGenerator(
        containerRef.current,
        config,
        blockType
      );
    }

    return () => {
      // Cleanup
      blockGeneratorRef.current?._cleanup?.();
    };
  });

  useEffect(() => {
    console.log("blockConfig updated!!");
    if (!blockGeneratorRef) return;
    blockGeneratorRef?.current?.updateConfig(blockConfig);
  }, [blockConfig]);

  // const initialHtml = new BlockHtmlGenerator(config, blockType).Generate();
  return (
    <>
      {/* Bootstrap CSS */}
      {/* <script src="/blocks/bootstrap/js/bootstrap.bundle.min.js"></script> */}

      <div>
        <div id={`${blockType}_id`}>{/* <>{parse(initialHtml)}</> */}</div>
      </div>
    </>
  );
}
