# donate-system-test
โดยจะใช้APIที่เช็คสลิปธนาคาร ในการบอกยอดการรับโดเนทเข้ามา และ มี widgets (สามารถปรับแต่งได้ในfolder widgets)
โดยสามารถใช้urlที่เป็นwidgetsใช้ใน OBS หรือ โปรแกรมสตรีมอื่นๆได้เลย และในฝังของผู้ใช้สามารถเข้าผ่านหน้าโดเนท(donate.html)เพื่อใส่ข้อมูลการโดเนทได้เลย
เราสามรถtestโดเนทที่เข้ามาได้โดยใช้ในหน้า testdonte 

<h3>requirement</h3>

<li>API สำหรับเช็คสลิป(ต้องเช่า)</li>
<li>Database สำหรับเช็คสลิปว่ามีการโดเนทเข้ามามั้ยและเก็บข้อมูลเพื่อกันสลิปซ้ำ (MongoDB)</li>

<h3>framework</h3>
<li>Node.js</li>
<li>Express.js</li>
<li>Socket.io</li>
<li>Bootstrap</li>

<h2>install</h2>

```
npm i
```
<h2>run</h2>

```
node .
```
