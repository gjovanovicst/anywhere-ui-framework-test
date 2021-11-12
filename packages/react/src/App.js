import "./App.css";
import {
  AnyCheckbox,
  AnyDropdown,
  AnyListbox,
  AnyButton,
  AnyTabView,
  AnyTabPanel,
  AnyInputText,
} from "@anywhere-ui/react";

function App() {
  const cities = [
    {
      label: "New York",
      value: {
        id: 1,
        name: "New York",
        code: "NY",
        countryCode: "US",
        country: "USA",
      },
    },
    {
      label: "Rome",
      value: {
        id: 2,
        name: "Rome",
        code: "RM",
        countryCode: "IT",
        country: "Italy",
      },
    },
    {
      label: "London",
      value: {
        id: 3,
        name: "London",
        code: "LDN",
        countryCode: "GB",
        country: "England",
      },
    },
    {
      label: "Istanbul",
      value: {
        id: 4,
        name: "Istanbul",
        code: "IST",
        countryCode: "TR",
        country: "Turkey",
      },
    },
    {
      label: "Paris",
      value: {
        id: 5,
        name: "Paris",
        code: "PRS",
        countryCode: "FR",
        country: "France",
      },
    },
    {
      label: "Belgrade",
      value: {
        id: 6,
        name: "Belgrade",
        code: "BGD",
        countryCode: "RS",
        country: "Serbia",
      },
    },
    {
      label: "Tokyo",
      value: {
        id: 7,
        name: "Tokyo",
        code: "TOK",
        countryCode: "JP",
        country: "Japan",
      },
    },
    {
      label: "Madrid",
      value: {
        id: 8,
        name: "Madrid",
        code: "MAD",
        countryCode: "ES",
        country: "Spain",
      },
    },
  ];

  return (
    <div className="App">
      <main>
        <AnyTabView id="tv1">
          <AnyTabPanel header="Header 1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AnyTabPanel>
          <AnyTabPanel header="Header 2">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci
              velit, sed quia non numquam eius modi.
            </p>
          </AnyTabPanel>
          <AnyTabPanel header="Header 3">
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </AnyTabPanel>
        </AnyTabView>
        <AnyCheckbox checked="true" label="React" value="React" /> <br />
        <AnyCheckbox checked="false" label="Vue" value="Vue" /> <br />
        <AnyCheckbox
          checked="true"
          label="Angular"
          value="Angular"
          readonly="false"
        />
        <br />
        <AnyDropdown options={cities} placeholder="Select city" />
        <br />
        <AnyListbox options={cities} anyStyle={{ width: "14rem" }} />
        <br />
        <AnyInputText />
        <br />
        <AnyButton type="submit" label="Submit" />
      </main>
    </div>
  );
}

export default App;
