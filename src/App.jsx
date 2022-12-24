import TestingAPICalls from "./components/TestingAPICalls";
import FirstTest from "./old/FirstTest";
import TestWithMockData from "./old/TestWithMockData-1";


const data = [{
    "id": 1,
    "first_name": "Mufinella",
    "last_name": "McVanamy",
    "email": "mmcvanamy0@e-recht24.de",
    "age": 30
  }, {
    "id": 2,
    "first_name": "Clarice",
    "last_name": "Harrild",
    "email": "charrild1@dion.ne.jp",
    "age": 65
  }, {
    "id": 3,
    "first_name": "Amby",
    "last_name": "Emmer",
    "email": "aemmer2@buzzfeed.com",
    "age": 67
  }, {
    "id": 4,
    "first_name": "Alexandr",
    "last_name": "Hacquel",
    "email": "ahacquel3@illinois.edu",
    "age": 16
  }, {
    "id": 5,
    "first_name": "Mollee",
    "last_name": "Janny",
    "email": "mjanny4@instagram.com",
    "age": 64
  }, {
    "id": 6,
    "first_name": "Avis",
    "last_name": "Mutimer",
    "email": "amutimer5@nyu.edu",
    "age": 88
  }, {
    "id": 7,
    "first_name": "Barbra",
    "last_name": "Laird",
    "email": "blaird6@epa.gov",
    "age": 96
  }, {
    "id": 8,
    "first_name": "Abbot",
    "last_name": "Husselbee",
    "email": "ahusselbee7@gravatar.com",
    "age": 79
  }, {
    "id": 9,
    "first_name": "Cherye",
    "last_name": "Yesinov",
    "email": "cyesinov8@hibu.com",
    "age": 45
  }, {
    "id": 10,
    "first_name": "Meriel",
    "last_name": "Row",
    "email": "mrow9@homestead.com",
    "age": 97
  }]


function App() {
  return (
    <div className="App">
        {/* <FirstTest/> */}
        {/* <TestWithMockData data={data} /> */}
        <TestingAPICalls/>
    </div>
  );
}

export default App;
