import React from "react";

import { Heading, Slide, SlideSet, CodePane } from "spectacle";

import NoteList from "../elements/NoteList";

import immutableDeepUpdateData from "../code/immutableDeepUpdateData";

export default (
  <SlideSet>
    <Slide bgImage="" bgSize="contain" bgRepeat="no-repeat">
      <Heading
        size={2}
        caps
        lineHeight={1}
        textColor="secondary"
        margin="1rem 0"
      >
        Testing edge cases is boring - make a robot do it
      </Heading>
      <Heading size={3} margin="1rem 0">
        Intro to Property-Based Testing
      </Heading>

      <NoteList
        notes={[
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
        Immutable Deep Updates: Shape
      </Heading>

      <CodePane
        textSize="1.5rem"
        lang="javascript"
        source={immutableDeepUpdateData}
      />

      <NoteList
        notes={[
          "Let's say you have this complicated data structure.",
          "describes a C5 employee, Alice",
          "Alice just heard this talk",
          "obviously her ramda skill just went to 10",
          "we want to update state.employee.skills[2].skill"
        ]}
      />
    </Slide>

    <Slide bgImage="./img/test-all.jpg" bgSize="contain" bgRepeat="no-repeat" />

    <Slide>
      <Heading size={1}>Thanks!</Heading>
    </Slide>
  </SlideSet>
);
