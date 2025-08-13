import { gsap } from 'gsap';

class Banner {
  private component: HTMLElement;
  private tickerTrack: HTMLElement;
  private tickerText: HTMLElement[];
  private speed: number;
  private movement: number;
  private tl: gsap.core.Timeline;

  constructor() {
    this.component = document.querySelector('.component_banner') as HTMLElement;
    this.tickerTrack = this.component.querySelector('.banner_track') as HTMLElement;
    this.tickerText = [...this.component.querySelectorAll('.banner_text')] as HTMLElement[];
    this.speed = parseInt(this.component.dataset.tickerSpeed as string);
    this.movement = 0;
    this.tl = gsap.timeline({ paused: true });

    setTimeout(() => {
      this.calculateMovement();
      this.setListeners();
      this.animateTicker();
    }, 1000);
  }

  private calculateMovement() {
    this.tickerText.forEach((item, i) => {
      if (i <= 1) {
        const width = item.offsetWidth;
        this.movement += width;
      }
    });
  }

  private animateTicker() {
    this.tl.to(this.tickerText, {
      duration: this.speed,
      x: -this.movement,
      ease: 'linear',
      repeat: -1,
      onRepeat: () => {
        gsap.set(this.tickerTrack, { x: 0 });
      },
    });
  }

  private setListeners() {
    this.component.addEventListener('mouseenter', () => {
      this.tl.pause();
      this.tickerText.forEach((item) => (){
        gsap.set
      })
    });
    this.component.addEventListener('mouseleave', () => {
      this.tl.play();
    });
  }

  public start() {
    this.tl.play();
  }

  public stop() {
    this.tl.pause();
  }
}

let bannerInstance: Banner;

export const initBanner = () => {
  bannerInstance = new Banner();
  return bannerInstance;
};
export default initBanner;
// export const banner = () => {
//   new Banner();
// };
// export default banner;
