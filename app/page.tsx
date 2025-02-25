"use client";

import Countdown from "@/components/Countdown";
import PrizeCarousel from "@/components/PrizeCarousel";
import Link from "next/link";
import buttonStyles from "@/styles/buttons.module.scss";
import backgroundStyles from "@/styles/background.module.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
   <div>
    <div className={backgroundStyles["main-section"]}>
      <Countdown />
      <PrizeCarousel />
      <Link href="/enterNow">
        <button className={buttonStyles["larger-button"]} onClick={() => router.push("/enterNow")}>
          ENTER NOW
        </button>
      </Link>
    </div>
    <div className={backgroundStyles["video-section"]}>
      <h3 className={backgroundStyles["video-caption"]}>
        HEADLINE ABOUT VIDEOS <span className={backgroundStyles["video-caption-red"]}>ALREADY SUBMITTED</span>
      </h3>
      <div className={backgroundStyles["video-container"]}>
        <img src="/images/video1.png" className={backgroundStyles["video-image"]} alt="Image 1" />
        <img src="/images/video2.png" className={backgroundStyles["video-image"]} alt="Image 2" />
        <img src="/images/video3.png" className={backgroundStyles["video-image"]} alt="Image 3" />
        <img src="/images/video4.png" className={backgroundStyles["video-image"]} alt="Image 4" />
        <img src="/images/video5.png" className={backgroundStyles["video-image"]} alt="Image 5" />
      </div>
    </div>
    <div className={backgroundStyles["cta-section"]}>
      <p className={backgroundStyles["cta-header"]}>
        LAST CTA
      </p>
      <p className={backgroundStyles["cta-caption"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Curabitur tellus, pulvinar quis volutpat et,
        mollis vitae ligula.
      </p>
      <Link href="/enterNow">
        <button className={buttonStyles["larger-button"]} onClick={() => router.push("/enterNow")}>
          ENTER NOW
        </button>
      </Link>
    </div>
    <div className={backgroundStyles["footer-section"]}>
      <div className={backgroundStyles["footer-image-container"]}>
        <img
          src="/images/witLogo2x.png"
          alt="Footer Logo"
          className={backgroundStyles["footer-image"]}
        />
      </div>
      <div className={buttonStyles["simple-button-container"]}>
        <Link href="/faq">
          <button className={buttonStyles["simple-button"]} onClick={() => router.push("/faq")}>
            FAQ
          </button>
        </Link>
        <span className={buttonStyles["divider"]}>|</span>
        <Link href="/privacyPolicy">
          <button className={buttonStyles["simple-button"]} onClick={() => router.push("/privacyPolicy")}>
            Privacy Policy
          </button>
        </Link>
        <span className={buttonStyles["divider"]}>|</span>
        <Link href="/termsOfService">
          <button className={buttonStyles["simple-button"]} onClick={() => router.push("/termsOfService")}>
            Terms of Service
          </button>
        </Link>
      </div>
    </div>
  </div>
    
  );
}
