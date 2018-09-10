import React from "react";

import {
  Heading,
  Slide,
  SlideSet,
  CodePane,
  Text,
  List,
  ListItem
} from "spectacle";

import NoteList from "../elements/NoteList";

import exampleAdditionCommutative from "../code/exampleAdditionCommutative";
import propertyAdditionCommutative from "../code/propertyAdditionCommutative";

export default (
  <SlideSet>
    <Slide bgImage="" bgSize="contain" bgRepeat="no-repeat">
      <Heading
        size={2}
        caps
        lineHeight={1}
        textColor="tertiary"
        margin="1rem 0"
      >
        Making robots find edge cases
      </Heading>
      <Heading fit size={3} margin="1rem 0">
        Intro to Property-Based Testing
      </Heading>
      <Text fit>
        Will Ockelmann-Wagner | @WowItsWillWow | wow@carbonfive.com
      </Text>

      <NoteList
        notes={[
          "today we're going to talk about my very favorite topic:",
          "making robots do my work for me",
          "unit tests help catch bugs, but can't find any you didn't think of",
          "in a unit test, you write down the happy path",
          "then use your brain to come up with all the possible edge cases, and write examples for them",
          "but human brains are terrible at that, and also lazy",

          "tension between completeness and being obvious and bored",

          "Property-based testing is a technique for automating corner case detection",
          "Comes from Haskell, but implemented in most languages",
          "JS: JsVerify",
          "Haskell: QuickCheck",
          "Python: Hypothesis",
          "Elixir: StreamData"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={2}>
        Example-Based Testing
      </Heading>

      <CodePane
        textSize="1.5rem"
        lang="javascript"
        source={exampleAdditionCommutative}
      />

      <NoteList
        notes={[
          "What we think of when we talk about automated testing",
          "both unit and integration tests"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={2}>
        Example-Based Testing
      </Heading>

      <CodePane
        textSize="1.5rem"
        lang="javascript"
        source={exampleAdditionCommutative}
      />

      <NoteList
        notes={[
          "Imagine unit testing addition",
          "maybe toss a couple examples at it",
          "even try the zero edge case",
          "feels pretty solid"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={2}>
        Properties of Addition
      </Heading>

      <Text>Back to school:</Text>

      <List>
        <ListItem>Commutative: a + b = b + a</ListItem>
        <ListItem>Associative: (a + b) + c = a + (b + c)</ListItem>
        <ListItem>Identity: a + 0 = a</ListItem>
      </List>

      <NoteList
        notes={[
          "It's probably been a while, but",
          "here are some properties of addition you learned in school",
          "addition has the commutative (), associative (), and identity () properties",
          "if + does what it's supposed to, all these will ALWAYS hold true"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={2}>
        Property-Based Testing
      </Heading>

      <CodePane
        textSize="1.5rem"
        lang="javascript"
        source={propertyAdditionCommutative}
      />

      <NoteList notes={[""]} />
    </Slide>

    <Slide bgImage="./img/test-all.jpg" bgSize="contain" bgRepeat="no-repeat" />

    <Slide>
      <Heading size={1}>Thanks!</Heading>
    </Slide>
  </SlideSet>
);
