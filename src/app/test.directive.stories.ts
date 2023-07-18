import { Meta, moduleMetadata, StoryFn, StoryObj } from '@storybook/angular';
import { TestDirective } from './test.directive';

export default {
  title: 'TestDirective',
  component: TestDirective, // <-- there is not support for directives?
  decorators: [
    moduleMetadata({
      imports: [TestDirective],
    }),
  ],
} as Meta<TestDirective>;

const template: StoryFn<TestDirective> = (args) => ({
  props: args,
  template: `
  <div orgTestDirective>
    foo
  </div>`,
});

export const primary: StoryObj<TestDirective> = {
  render: template,
};
