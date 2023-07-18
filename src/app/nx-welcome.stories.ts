import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { NxWelcomeComponent } from './nx-welcome.component';

export default {
  title: 'NxWelcomeComponent',
  component: NxWelcomeComponent,
  decorators: [
    moduleMetadata({
      imports: [NxWelcomeComponent],
    }),
  ],
} as Meta<NxWelcomeComponent>;

export const active: StoryObj<NxWelcomeComponent> = {};
