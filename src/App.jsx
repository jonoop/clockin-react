const datas = [
  {
    router: "bijin",
    title: "比金更宝",
    name: "01绍明02鑫彤03恩霖04蓉蓉05陈娟06建虾07江男08雪英09新良10朝凯11薛彬12雪婷13银琴14陈锋15薛淋16施晶17华清18超群19海英20雪峰",
    id: 1,
  },
  {
    router: "dianb",
    title: "殿中青榄B",
    name: "01俊彪02兰英03建宁04桂花05敦明06陈雄07科全08雅洪09林振10躬华11忠善12江男13晨杭14王松15振文16宏珠17熊鑫18德锋19薛淋20能平21亮亮22薛晟23凤英24雪娥25超群26杨帅",
    id: 2,
  },
];

function App() {
  const [dataObj] = datas.filter((data) => data.router === "bijin");
  return (
    <>
      <Bijin title={dataObj.title} name={dataObj.name} />
    </>
  );
}

function Bijin(props) {
  return (
    <div>
      <h3
        style={{
          color: "red",
        }}
      >
        ({props.title}) 请输入或粘贴：
      </h3>
      <MyTextarea />
      <br />
      <br />
      <GetButton name={props.name} text={document.getElementById("wenben")} />
      <br />
      <br />
      <a id="alink" target="_blank"></a>
      <br />
      <br />
      <CopyButton />
    </div>
  );
}

function MyTextarea() {
  return (
    <textarea
      id="wenben"
      style={{ width: "300px", height: "300px" }}
    ></textarea>
  );
}

function GetButton(props) {
  return <button onClick={getResult.bind(props)}>获取结果</button>;
}

function CopyButton() {
  return <button>复制</button>;
}

function getResult() {
  const putText = this.text;
  const str = this.name;
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    const pattern = new RegExp("[0-9]+");
    if (pattern.test(arr[i])) {
      const newarr = arr[i].replace(arr[i], ",");
      arr.splice(i, 1, newarr);
    }
    //console.log(arr[i]);
  }
  let strnew = "";
  for (let i = 0; i < arr.length; i++) {
    strnew = strnew.concat(arr[i]);
  }
  //console.log(strnew);
  const arr1 = strnew.split(",,");
  arr1.splice(0, 1);
  //console.log(arr1);
  let data = "";
  for (var i = 0; i < arr1.length; i++) {
    var float = putText.includes(arr1[i]);
    //console.log(float);
    if (float == false) {
      data = data.concat(" @", arr1[i]);
    }
  }
  document.getElementById("alink").innerHTML = data;
}

export default App;
