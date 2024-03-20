const axios = require('axios')
const formdata = require('form-data')
const checkNum = require('./strNum')
const strName = require('./strName')
const { api_key,  acc_name, num_bank, name_bank } = require('./config.json')

const verifySlip = async (imgfile) => {
    try{
        if (!imgfile) {
            throw new Error('File invalid')
        }
        const form = new formdata()
        form.append('file', imgfile.buffer, {filename: imgfile.originalname})
        const response = await axios.post('YOUR-API-URL', form, {
            headers:{
                ...form.getHeaders(),
                'Authorization': `Bearer ${api_key}`
            }
        })
        const data = response.data.data;
        if (data.receiver.bank.short === name_bank && checkNum(data.receiver.account.bank.account) === checkNum(num_bank) && data.receiver.account.name.th === strName(acc_name)) {
            return {
                status: 200,
                data: data,
                msg: "Thankyou for Donatee!!! :3"
            }
        } else {
            return {
                status: 200,
                msg: "คุณโอนเงินไม่ตรงบัญชีที่กำหนด"
            }
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = verifySlip;