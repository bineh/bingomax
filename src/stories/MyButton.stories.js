import FlipCard from "./../FlipCard";

export default {
  title: "FlipCard",
  component: FlipCard,
  argTypes: { onClick: { action: "asdasd" } },
};

const word = {
  en: "dog",
  de: "Hund",
  flipped: "false",
};

// const Template = (args) => <FlipCard {...args} />;
const Template = (args) => <FlipCard {...args} />;
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  //   primary: true,
  //   label: "Button",
  word: { word },
  randomWord: { word },
  flipped: true,
};

// export const Card = () => Template.bind({});
// export const Card = () => <FlipCard word={word} randomWord={word} />;

// Card.args = { word: { word }, randomWord: { word }, flipped: false };
