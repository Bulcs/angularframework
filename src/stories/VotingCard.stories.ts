import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { VotingCardComponent } from '../components/votingCard.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/Button.component';
import { ResultComponent } from '../components/result.component';

export default {
  title: 'VotingCard',
  component: VotingCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ResultComponent, ButtonComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    title: { control: 'text' },
    votes: { control: 'array' },
    state: {
      options: ['open', 'close'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<VotingCardComponent> = (args: VotingCardComponent) => ({
  props: args,
});

export const PrimaryVotingCardPage = Template.bind({});
PrimaryVotingCardPage.storyName = 'Votacao';
PrimaryVotingCardPage.args = {
  title: 'Votação',
  state: 'open',
  votes: [
    { option: 'Sim', count: 0 },
    { option: 'Não', count: 0 },
    { option: 'Talvez', count: 0 },
  ],
};

export const SecondaryVotingCardPage = Template.bind({});
SecondaryVotingCardPage.storyName = 'Resultado Votação';
SecondaryVotingCardPage.args = {
  title: 'Resultado Votação',
  state: 'close',
  votes: [
    { option: 'Sim', count: 1 },
    { option: 'Não', count: 1 },
    { option: 'Talvez', count: 1 },
  ],
};
