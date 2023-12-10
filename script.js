const loadData = () => {
  fetch("https://api.openligadb.de/getbltable/sl1/2011").then((result) => {
    result.json().then((data) => {
      console.log(data);
    });
  });
};