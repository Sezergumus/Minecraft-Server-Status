import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // You can change after the status?ip= part to use it for a different server
    fetch('https://mcapi.us/server/status?ip=surhaybakis.minecraftoyna.com')
      .then(response => response.json())
        .then(Data => setData(Data));
  }, [])

  if (!data) {
    return <span>Loading...</span>;
  }
  if (data.error) {
    return <span>{data.error}</span>;
  }

  return(
    <div>
      <div className="background-container"></div>
      <div className="app-container">
        <img src="https://skinmc.net/en/achievement/1/Surhay+Bakis/Minecraft+Sunucusu" className="minecraft-achievement" alt="Minecraft Achievement" /> 
        <table>
          <tbody>
            <tr className="top" id="first">
              <td>
                <p>Sunucu Durumu</p>            
              </td>
              <td>
                {data.online ? <span style={{color:"green"}}>Online</span> : <span style={{color:"red"}}>Offline</span>}
              </td>
            </tr>
            <tr className="top" id="second">
              <td>
                <p>Oyuncular</p>       
              </td>
              <td>
                <span>({data.players.now}/{data.players.max})</span>       
              </td>
            </tr>

          <tr>     
            <ul>
              {data.players.now > 0 &&
                data.players.sample.map((player) => (
                  <li className="tooltip">
                    <img className="avatar tooltip" height={32} width={32} src={`https://minotar.net/avatar/${player.name}`}/>
                    <span class="tooltiptext">{player.name}</span>
                  </li>
              ))}
            </ul>
          </tr>
          </tbody>
        </table>
      </div>
      <footer>
        <div className="footer-container">
          <span>made by <a href="https://sezergumus.dev/">sezer</a> with ❤️</span>
        </div>
      </footer>
    </div>
  )
}

export default App;
