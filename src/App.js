import logo from './logo.svg';
import './App.css';
import './Components/Hello'
import Hello from './Components/Hello';
import Counter from './Counter/Counter';
import MyComponent from './Components/HaloClass';
import Company from './Components/Company';
function App() {
  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
  ];
  const FilterCompany = companies.filter(Company =>
    Company.start >= 1987)
  
    var people = [
      {name: 'Jack', age: 50},
      {name: 'Michael', age: 9}, 
      {name: 'John', age: 40}, 
      {name: 'Ann', age: 19}, 
      {name: 'Elisabeth', age: 16}
    ];
    
  
    
      const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
      const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);
      const allAreTeenagers = people.every(person => person.age >= 10 && person.age <= 20);
      const anyIsTeenager = people.some(person => person.age >= 10 && person.age <= 20);
    
      return (
        <div className="App">
          <p>First Teenager: {JSON.stringify(firstTeenager)}</p>
          <p>All Teenagers: {JSON.stringify(allTeenagers)}</p>
          <p>All Are Teenagers: {allAreTeenagers.toString()}</p>
          <p>Any Is Teenager: {anyIsTeenager.toString()}</p>
        
        
        
        {/* {FilterCompany.map((Company, index) => (
          <table>
            <tr>
              <th>
                {Company.name}
              </th>
              
              <th>
                {Company.end}
              </th>
            </tr>
          </table>
        ))} */}
        <Hello />
        <Counter/>
        <MyComponent prop="my Value"/>
        <Company FilterCompany={companies}/>
      </div>
      )
    /*var array = [1, 2, 3, 4];
  
    var sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  
    return <p>sum:{JSON.stringify(sum)}</p>;*/
  

}

export default App;
