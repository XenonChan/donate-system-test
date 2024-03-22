const axios = require('axios')
const formdata = require('form-data')
const checkNum = require('./strNum')
const strName = require('./strName')
const slip = require('./model/alreadySlip')
const { api_key,  acc_name, num_bank, name_bank, url_api } = require('../config.json')

const verifySlip = async (imgfile, name, message) => {
    try{
        if (!imgfile) {
            throw new Error('File invalid')
        }
        const form = new formdata()
        form.append('file', imgfile.buffer, {filename: imgfile.originalname})
        const response = await axios.post(url_api, form, {
            headers:{
                ...form.getHeaders(),
                'Authorization': `Bearer ${api_key}`
            }
        })
        const data = response.data.data;
        if (data.receiver.bank.short === name_bank && checkNum(data.receiver.account.bank.account) === checkNum(num_bank) && data.receiver.account.name.th === strName(acc_name)) {
            const ref = await slip.findOne({ ref:data.transRef })
            if (!ref) {
                const addSlip = new slip({
                    ref: data.transRef,
                    name: name,
                    amount: data.amount.amount,
                    msg: message
                })
                await addSlip.save()
                return {
                    status: 200,
                    data: data,
                    msg: "Thankyou for Donatee!!! :3"
                }
            } else {
                return {
                    status: 404,
                    msg: "สลิปนี่ถูกโดเนทมาแล้ว"
                }
            }
        } else {
            return {
                status: 404,
                msg: "คุณโอนเงินไม่ตรงบัญชีที่กำหนด"
            }
        }
    } catch (err) {
        console.log(err)
    }
}

module.exports = verifySlip;