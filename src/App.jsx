import { useState } from "react";
import queryString from "query-string";
import { CopyToClipboard } from "react-copy-to-clipboard";

const datas = [
  {
    router: "bijin",
    title: "比金更宝",
    name: "01绍明02鑫彤03恩霖04蓉蓉06建虾07江男08雪英09新良10朝凯11薛彬12雪婷13银琴14陈锋15薛淋16施晶17华清18超群19海英20雪峰",
    id: 1,
  },
  {
    router: "dianb",
    title: "殿中青榄B",
    name: "01俊彪02兰英03建宁04桂花05敦明06陈雄07科全08雅洪09林振10躬华11忠善12江男13晨杭14王松15振文16宏珠17熊鑫18德锋19薛淋20能平21亮亮22薛晟23凤英24雪娥25超群26杨帅",
    id: 2,
  },
  {
    router: "fengxian",
    title: "园中凤仙",
    name: "01刘垚02木发03华清04丽娟05恩赐06陈梅07林婧08立洪09妍玲10桂花11小红12周倩13娟娟14惠娟15航钦16杨珍17陈婷18洛燕19祥增",
    id: 3,
  },
  {
    router: "henga",
    title: "圣言比日恒A",
    name: "01以诺02维佳03余敏04小峰05美琴06丽芳07小明08建英09云英10王丽11明娇12陈英13馨恒14阿弟15甜甜16如意17丽斌18张晓19品琴20晓枫21玉兰22昕婷",
    id: 4,
  },
  {
    router: "hengb",
    title: "圣言比日恒B",
    name: "01海荣02小强03莉莎04云芳05小玲06晨杭07王晶08桂花09何文10小霞11融融12李娟13华明14建英15希强16敦明17许婷18林振19美君20仕明21爱英22俊彪23王松24小惠25晓雯",
    id: 5,
  },
  {
    router: "jiumei1",
    title: "圣言比酒美一组",
    name: "01美蓉02小浓03兰兰04林亮05陈梅06雨虹07佳颖08陈婷09陈坚10华盛11志强12佳丽13道旺",
    id: 6,
  },
  {
    router: "putao",
    title: "园中葡萄",
    name: "01莹莹02华平03琛琤04何娟05俊美06晓枫07双容08义琼09以诺10薛洪11品琴12冬辉13雨燕14王晶15刘逊16俊明17倪帆18倪萍19学文20甜甜21何叶22梅云23平旺24陈波25子若26丹梅27秀凤28碧珍29林勇30丽婷31何枫",
    id: 7,
  },
  {
    router: "qing",
    title: "青草地",
    name: "1旭晖2勃文3凤娥4爱珍5美云6美英7于信8建虾9丽华10向明11积国12林羡临13叶庭14江萍15文宏16丽珍17文娟18阿梅19旺玉20爱云21桂云22梅珍23勃君24辰荣25希莹26燕子27娟英28美芳29月霞30佳丽",
    id: 8,
  },
  {
    router: "xi1",
    title: "溪水旁1",
    name: "01俊彪02美英03云芳04凤琴05登龙06美婷07爱明08绍明09刘垚10莹莹11永康12文友13晓岚14陈梅15谢英16晓静17道旺18希强19晓惠20小琴21美蓉22钦云23海荣24林辉25文宏26慧娟27晓云28美芳29春花30仕明31艳艳32严燕33王松34林娟35小红36志强37华芳38燕芳39郑玲40爱华41薛淋42忠善43晓敏44小峰45雪娥46明婷47平平48宏珠49林振50躬谊51月霞52若飞53惠娟54朝凯55华清56美文57羽慧58惠芸59魏澜60佳俊61晓清62陈雄63雅英64彩霞65力韦66佳颖",
    id: 9,
  },
  {
    router: "xi2",
    title: "溪水旁2",
    name: "01爱珍02丽华03子若04秀珠05陈娟06晓雯07丽斌08国美09桂花10蕊云11叶庭12诵捷13碧珍14品琴15向明16旭晖17余敏18晨杭19爱英20郭青21𣇈霞22圣凯23丽婷24勃文25明云26英珠27小惠28维佳29寒梅30余斌31语奇32秀金33林梅34美琴35美英36秀斌37陈英38岩玲39江萍40丽珍41桂云42蒋妍43梅珍44龙飞45余婷46妹妹47常繁48玉莲49晓红",
    id: 10,
  },
  {
    router: "xi3",
    title: "溪水旁3",
    name: "01俊彪02培成03世坤04登龙05勃君06祈泽07雅珍08荣忠09时明10许婷11愉芳12俊玲13陈娟14王昕15裕玲16凤波17佳俊18恩宝19義臣20莉莎",
    id: 11,
  },
];

function App() {
  const [dataObj] = datas.filter(
    (data) => data.router === queryString.parse(window.location.search).id
  );
  return (
    <>
      <Bijin title={dataObj.title} name={dataObj.name} />
    </>
  );
}

function Bijin({ title, name }) {
  const [textData, setTextData] = useState(name);

  function handleBtn() {
    setTextData(document.getElementById("wenben").value);
  }
  return (
    <div>
      <h3
        style={{
          color: "red",
        }}
      >
        ({title}) 请输入或粘贴：
      </h3>
      <MyTextarea />
      <br />
      <br />
      <GetButton name={name} text={textData} onClick={handleBtn} />
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

function GetButton({ name, text, onClick }) {
  const data = getResult(text, name);
  return (
    <div>
      <button onClick={onClick}>获取结果</button>
      <br />
      <br />
      <a>{data}</a>
      {/* {(document.getElementById("wenben").value = "")} */}
      <br />
      <br />
      <CopyButton text={data} />
    </div>
  );
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <div>
      {copied ? (
        <a style={{ display: "grid", color: "red" }}>已复制!</a>
      ) : (
        <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
          <button>复制</button>
        </CopyToClipboard>
      )}
    </div>
  );
}

function getResult(putText, str) {
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

  return data;
}

export default App;
