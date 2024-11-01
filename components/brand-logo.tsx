import GlobeIcon from "./svg/globe-icon";

export default function BrandLogo() {
  return (
    <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
      <GlobeIcon className="size-8" />
      <span>Easy PPP</span>
    </span>
  );
}
