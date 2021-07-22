import { Story, Meta } from '@storybook/angular/types-6-0';
import { ResultComponent } from '../components/result.component';

export default {
  title: 'Result',
  component: ResultComponent,
  argTypes: {
    votes: { control: 'array' },
  },
} as Meta;

const Template: Story<ResultComponent> = (args: ResultComponent) => ({
  props: args,
});

export const PrimaryResult = Template.bind({});
PrimaryResult.storyName = 'Votação 1';
PrimaryResult.args = {
  votes: [
    { option: 'Sim', count: 1 },
    { option: 'Não', count: 1 },
    { option: 'Talvez', count: 1 },
  ],
};
