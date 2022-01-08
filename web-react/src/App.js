import GraphContainer from "./components/GraphContainer";
import LabelFilter from "./components/LabelFilter";
import { LabelProvider } from "./components/LabelProvider";
import SearchContainer from "./components/SearchCotainer";
import IntroSession from "./components/IntroSession";
import BusinessResults from "./components/BusinessResults";


function App() {
  return (
    <div>
      <IntroSession/>
      <SearchContainer/>
      <LabelProvider>
          <LabelFilter/>
          <GraphContainer/>
      </LabelProvider>
      </div>
  );
}

export default App;