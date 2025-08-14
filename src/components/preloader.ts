import { gsap } from 'gsap';

import initBanner from './banner';

class Preloader {
  private component: HTMLElement;
  private logo: HTMLElement;
  private text: HTMLElement;
  private mask: HTMLElement;
  private video: HTMLVideoElement;
  private banner: HTMLElement;
  private bannerInstance: ReturnType<typeof initBanner>;

  constructor() {
    this.component = document.querySelector('.section_preloader') as HTMLElement;
    this.logo = this.component.querySelector('.preloader_logo') as HTMLElement;
    this.text = this.component.querySelector('.prelader_text') as HTMLElement;
    this.mask = this.component.querySelector('.preloader_mask') as HTMLElement;
    this.video = document.querySelector('.video_main') as HTMLVideoElement;
    this.banner = document.querySelector('.component_banner') as HTMLElement;

    this.bannerInstance = initBanner();

    if (this.video) this.video.pause();

    this.startPreloader();
  }

  private startPreloader() {
    const easeMain = 'expo.out';
    const timeMain = 0.6;

    const tl = gsap.timeline();
    tl.set(this.logo, { scale: 0.8 });
    tl.to(this.logo, { opacity: 1, ease: 'power4.inOut' });
    tl.to(this.logo, { duration: timeMain, scale: 1, ease: easeMain });
    tl.to(this.mask, { duration: 2, height: '0%', ease: 'expo.out' });
    tl.from(this.banner, { duration: 1, y: '-100%', ease: 'power4.out' }, '<0.8');
    tl.set(this.component, { display: 'none' });

    const tlDur = tl.duration();
    setTimeout(
      () => {
        if (this.video.paused) this.video.play();
      },
      (tlDur - 1.5) * 1000,
    );

    // const tl = gsap.timeline();
    // tl.set(this.logo, { scale: 0.2 });
    // tl.to(this.logo, { opacity: 1, ease: 'power4.inOut' });
    // tl.to(this.logo, { duration: timeMain, scale: 0.4, ease: easeMain });
    // // tl.to(this.mask, { backgroundColor: '#FAB884', ease: easeMain }, '<');
    // tl.to(this.logo, { duration: timeMain, scale: 0.6, ease: easeMain });
    // // tl.to(this.mask, { backgroundColor: '#8697B8', ease: easeMain }, '<');
    // tl.to(this.logo, { duration: timeMain, scale: 0.8, ease: easeMain });
    // // tl.to(this.mask, { backgroundColor: '#F68DA5', ease: easeMain }, '<');
    // tl.to(this.logo, { duration: timeMain, scale: 1, ease: easeMain });
    // // tl.to(this.mask, { backgroundColor: '#DA2908', ease: easeMain }, '<');

    // // tl.set(this.component, { backgroundColor: 'transparent' });
    // tl.to(this.mask, { duration: 2, height: '0%', ease: 'power4.inOut' }, '<');
    // tl.from(this.banner, { duration: 1, y: '-100%', ease: 'power4.out' }, '<1.5');
    // tl.set(this.component, { display: 'none' });
  }
}
export const preloader = () => {
  new Preloader();
};
export default preloader;
