var osu = require("node-os-utils");
const os = require("os");
var cpu = osu.cpu;

const id = getRandomeId();
async function perfData(socket)
{
    const cpuPercentage = await cpu.usage();
    const user = await osu.osCmd.whoami();
    const memInfo = await osu.drive.info();
    const numberOfCors = cpu.count();
    const netStat = await osu.netstat.inOut();
    const operatingSystem = await osu.os.oos();
    const ip = osu.os.ip();
    const arc = osu.os.arch();
    const type = osu.os.type();
    const hostName = osu.os.hostname();
    const data =  {cpuPercentage,
                      user,
                      memInfo,
                      numberOfCors,
                      netStat,
                      operatingSystem,
                      ip,
                      arc,
                      type,
                      hostName,
                      id,
                     };
    socket.emit("perfData",data);
}

module.exports = perfData;

function getRandomeId(){
    let id = 0;
    for(let i = 0;i<6;++i)
    {
        id = (id*10) + Math.floor(Math.random()*10+1);
    }
    return String(id);
}