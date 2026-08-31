import Image from "next/image";

export function PhotoPortrait() {
  return (
    <div className="portrait" aria-label="Portrait de Joseph Ngan Mintamak">
      <div className="portrait__halo" aria-hidden="true" />
      <Image
        src="/photo-teams.png"
        alt="Joseph Ngan Mintamak"
        width={430}
        height={560}
        priority
        sizes="(max-width: 960px) 70vw, 380px"
      />
      <span className="portrait__caption">Joseph Ngan Mintamak · QA</span>
    </div>
  );
}
