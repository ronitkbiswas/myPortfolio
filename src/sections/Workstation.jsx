import "/src/App.css";
function Workstation() {
    return (
        <div className="workstation">
  <h2>💻 My Workstation</h2>

  <div className="badges">
    <img src="https://img.shields.io/badge/Ubuntu-informational?style=flat&logo=ubuntu&logoColor=white&color=E95420" />
    <img src="https://img.shields.io/badge/Intel-i5_13th_Gen-informational?style=flat&logo=intel&logoColor=white&color=0071C5" />
    <img src="https://img.shields.io/badge/RAM-8GB-informational?style=flat&color=green" />
    <img src="https://img.shields.io/badge/VS_Code-informational?style=flat&logo=visualstudiocode&logoColor=white&color=007ACC" />
  </div>
</div>
    );
}
export default Workstation;