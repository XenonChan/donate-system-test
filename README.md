# donate-system-test
<h2>ระบบโดเนทสำหรับใช้เอง</h2>
โดยจะใช้APIที่เช็คสลิปธนาคาร ในการบอกยอดการรับโดเนทเข้ามา และ มี widgets (สามารถปรับแต่งได้ในfolder widgets)
โดยสามารถใช้urlที่เป็นwidgetsใช้ใน OBS หรือ โปรแกรมสตรีมอื่นๆได้เลย และในฝังของผู้ใช้สามารถเข้าผ่านหน้าโดเนท(donate.html)เพื่อใส่ข้อมูลการโดเนทได้เลย
เราสามรถtestโดเนทที่เข้ามาได้โดยใช้ในหน้า testdonte 

requirement

<li>API สำหรับเช็คสลิป(ต้องเช่า)</li>
<li>Database สำหรับเช็คสลิปว่ามีการโดเนทเข้ามามั้ยและเก็บข้อมูลเพื่อกันสลิปซ้ำ (MongoDB)</li>


frameworkที่ใช้ 
<li>Node.js</li>
<li>Express.js</li>
<li>Socket.io</li>
<li>Bootstrap</li>


install 
```
npm i
```
run
```
node .
```
