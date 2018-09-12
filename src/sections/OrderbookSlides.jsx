import React from "react";

import {
  Text,
  Heading,
  Slide,
  SlideSet,
  CodePane,
  List,
  ListItem,
  S
} from "spectacle";

import NoteList from "../elements/NoteList";

import orderBookTypes from "../code/orderBookTypes.ts";
import generatorOrder from "../code/generatorOrder.ts";
import generatorPositiveNumber from "../code/generatorPositiveNumber.ts";
import generatorOrderBook from "../code/generatorOrderBook.ts";
// import orderSampler from "../code/orderSampler.ts";

export default (
  <SlideSet>
    <Slide>
      <Heading fit size={1}>
        Deeper Dive
      </Heading>

      <NoteList
        notes={[
          "To see how property testing works in real world",
          "look at an example based on real",
          "not actual code or even language",
          "doing something similar, using property testing"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={1}>
        Tangent: Limit Order Books
      </Heading>

      <List>
        <ListItem>For asset trading, like stock market</ListItem>
        <ListItem>Orders placed with a Limit Price</ListItem>
        <ListItem>When an order comes in: </ListItem>
        <ListItem>give them the best available price</ListItem>
      </List>

      <NoteList notes={["explain orderbooks"]} />
    </Slide>

    <Slide>
      <Heading fit size={2}>
        Types: Limit Order Books
      </Heading>

      <CodePane textSize="2.5rem" lang="javascript" source={orderBookTypes} />

      <NoteList
        notes={[
          "no getting away from types",
          "comes from haskell-land",
          "if no type system, still have to think about shape of structures",
          "in this simple orderbook:",
          "order can be buy or sell",
          "it has an id, a user, a price, and a quantity to or sell at that price",
          "an orderbook is a list of buys and sells",
          "JsVerify works great with TS, but we'll stick with JS for the rest of the talk"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={1}>
        Custom Arbitrary Data Generators
      </Heading>

      <Text>The other half of property testing</Text>

      <NoteList
        notes={[
          "we've seen a property test that generates arbitrary primitives",
          "to generate arbitrary Orders",
          "we need custom data generators"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={1}>Important note</Heading>
      <Heading size={3}>jsc.record() returns a generator,</Heading>
      <Heading size={3}>not a value</Heading>

      <NoteList notes={[]} />
    </Slide>

    <Slide>
      <Heading size={2} fit>
        arbitraryOrder is not an Order
      </Heading>

      <CodePane textSize="2.25rem" lang="javascript" source={generatorOrder} />

      <NoteList
        notes={[
          "so arbitraryOrder isn't an order, its an object that JsVerify uses in a test to generate Orders later",
          "ok with that out of the way"
        ]}
      />
    </Slide>

    <Slide>
      <Heading size={2}>Positive Numbers</Heading>

      <CodePane
        textSize="2rem"
        lang="javascript"
        source={generatorPositiveNumber}
      />

      <NoteList
        notes={[
          "Details aren't important now",
          "jsverify only gives us jsc.number, which could be positive or negative",
          "you can map a type into another type",
          "you can add a filter so certain cases don't go through",
          "price can't be zero",
          "overuse filter makes test slower",
          "better to Math.abs instead of < 0 filter"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={2}>
        Arbitrary OrderBooks
      </Heading>

      <CodePane
        textSize="2.25rem"
        lang="javascript"
        source={generatorOrderBook}
      />

      <NoteList
        notes={[
          "Finally, use our complicated order type to make arbitrary lists of orders"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={2}>
        Arbitrary OrderBooks
      </Heading>

      <CodePane
        textSize="2.25rem"
        lang="javascript"
        source={generatorOrderBook}
      />

      <NoteList
        notes={[
          "Finally, use our complicated order type to make arbitrary lists of orders"
        ]}
      />
    </Slide>

    <Slide>
      <Heading fit size={1}>
        Arbitrary is not{" "}
        <S type="bold" textColor="black">
          (quite)
        </S>{" "}
        random
      </Heading>

      <List>
        <ListItem>
          Arbitrary data is generated from a{" "}
          <S type="bold">complexity number</S>
        </ListItem>
        <ListItem>
          Inputs start out less complex, and become more complex
        </ListItem>
        <ListItem>
          Test returns <S type="bold">least complex</S> possible failing test
        </ListItem>
      </List>

      <NoteList notes={["why a generator is different than factory bot"]} />
    </Slide>

    <Slide>
      <Heading size={1}>Moral of the story?</Heading>
    </Slide>

    <Slide>
      <Heading size={1}>Don&rsquo;t think for yourself</Heading>
    </Slide>

    <Slide>
      <Heading size={1}>Don&rsquo;t think for yourself</Heading>
      <Heading size={1} textColor="black" fit>
        (robots are better at it)
      </Heading>
    </Slide>
  </SlideSet>
);
