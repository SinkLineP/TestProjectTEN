const line = "aba[bab]xyx";

function decoder(string) {
  const regex = (/\[(.*?)\]/);
  const splitStr = string.split(regex);
  const newArray = [];

  const oneLine = splitStr[0];
  const firstLitters = oneLine.split("")[0];
  const centerLitters = oneLine.split("")[1];
  const secondLitters = oneLine.split("")[2];

  if (firstLitters === secondLitters && centerLitters !== firstLitters && centerLitters !== secondLitters) {

  }


}

decoder(line);