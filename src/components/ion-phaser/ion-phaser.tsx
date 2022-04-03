import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'ion-phaser',
  styleUrl: 'ion-phaser.css',
  shadow: true,
})
export class IonPhaser {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
