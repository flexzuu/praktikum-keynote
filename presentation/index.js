// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  Table,
  TableRow,
  TableHeaderItem,
  TableItem
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSplit from "./codesplit";
// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  reduxAnimation: require("../assets/redux.gif"),
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/plenigo-logo.png"),
  markdown: require("../assets/markdown.png"),
  man: require("../assets/man.jpg"),
  paywall: require("../assets/paywall.png"),
  about: require("../assets/about-business.png"),
  access: require("../assets/access.png"),
  tablet: require("../assets/tablet.jpg"),
  example: require("../assets/example.png"),
  integration: require("../assets/integration.png")
};

preloader(images);

const theme = createTheme({
  primary: "#00a6b4"
});
const grey = "rgba(125, 125, 125, 0.8)";
theme.screen.progress.bar.bar.background = grey;
theme.screen.controls.nextIcon.fill = grey;
theme.screen.controls.prevIcon.fill = grey;

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "slide"]} transitionDuration={500} progress="bar">
          <Slide bgImage={images.man.replace("/", "")} bgDarken={0.7}>
            <Heading size={2} caps fit lineHeight={1.5} textColor="tertiary">
              Praxissemester bei
            </Heading>
            <Image width="80%" src={images.logo}/>
            <Text textSize="1.5em" margin="100px 0px 0px 0px" textColor="tertiary">
              Fabian Beliza & Jonas Faber
            </Text>
          </Slide>
          <Slide bgColor="tertiary" notes="Bisher ist die technische Realisierung aufwändig und teuer, somit gerade für kleinere und mittlere Anbieter und Verlage kaum zu realisieren">
                <Layout>
                <Fill>
                  <Image src={images.paywall}/>
                </Fill>
                <Fill>
                  <Text textColor="primary" textSize="1.5em" textAlign="right">
                    plenigo ist eine Technologie Plattform, die den Vertrieb digitaler Produkte – Texte, Videos oder Musik – ermöglicht
                  </Text>
                </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="tertiary" notes="Plenigo Kunden zahlen eine monatliche Miete sowie ein Provision auf Verkäufe">
            <Heading size={4} caps lineHeight={1.5} textColor="primary">Paid-Content</Heading>
              <Layout>
                <Fill>
                  <Image src={images.about}/>
                </Fill>
                <Fill>
                  <Text textSize="1.5em" textAlign="right">
                    <List>
                      <ListItem>Schlüsselfertige Lösung</ListItem>
                      <ListItem>Software-As-A-Service</ListItem>
                      <ListItem>Schnelle Implementierung</ListItem>
                      <ListItem>Plugins und SDKs</ListItem>
                    </List>
                  </Text>
                </Fill>
              </Layout>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={4} caps lineHeight={1.5} textColor="primary">Was bietet plenigo?</Heading>
              <Layout>
                <Fill>
                  <Text textSize="1.5em" textAlign="right">
                    <List>
                      <ListItem>Paywall</ListItem>
                      <ListItem>Nutzerverwaltung</ListItem>
                      <ListItem>Produktverwaltung</ListItem>
                      <ListItem>Zahlungen</ListItem>
                      <ListItem>Rechnungsstellung</ListItem>
                      <ListItem>CRM-Funktionen</ListItem>
                    </List>
                  </Text>
                </Fill>
                <Fill>
                  <Image src={images.access}/>
                </Fill>
              </Layout>
          </Slide>
          <Slide bgImage={images.tablet.replace("/", "")} bgDarken={0.75} notes=
          "Markt digitaler Produkte. E-Publishing ist des am stärksten wachsende Segment. Plenigo peilt einen Umsatz von 13 Mio. € in 2018 an"
          >
            <Heading size={4} caps lineHeight={1.5} textColor="primary">
              Der Markt
            </Heading>
            <Text textSize="1.5em" textAlign="left" textColor="tertiary">
              Gesamtmarkt ca. € 3 Mrd. in 2016
            </Text>
            <br/>
            <Text textSize="1.5em" textAlign="left" textColor="tertiary">
              Der Markt ist segmentiert in:
            </Text>
            <List textColor="tertiary" textAlign="left">
              <ListItem><b>E-Publishing</b></ListItem>
              <ListItem>Musik / Radio</ListItem>
              <ListItem>Gaming</ListItem>
              <ListItem>TV / Video</ListItem>
            </List>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={5} caps lineHeight={1.5} textColor="primary">
            Funktionsweise
            </Heading>
            <Layout>
              <Fill>
                <Image margin="-20px" width="100%" src={images.example}/>
              </Fill>
              <Fill>
                <Image margin="20px" width="100%" src={images.integration}/>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="tertiary" notes="How Redux works.">
            <Image src={images.reduxAnimation.replace("/", "")} margin="0px auto 40px" height="60vh"/>
            <Heading size={2} caps textColor="primary" textFont="primary">
              Redux
            </Heading>
          </Slide>
          <Slide bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide align="center top" bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <CodeSplit source={require("raw!../assets/interactive.example")}>
              <Interactive/>
            </CodeSplit>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
