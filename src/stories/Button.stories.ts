import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../components/Button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  argTypes: {
    options: { control: 'array' },
  },
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.storyName = 'Sim-Não-Talvez';
Primary.args = {
  options: ['Sim', 'Não', 'Talvez'],
};
