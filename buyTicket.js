
// 查詢是一頁 訂票是一頁，只要在訂票頁面輸入資訊也可購買
    // 需要的資訊是時間和 車次
// 只要在 

// 訂票頁面 因為他重新整理就把帶入的資訊搞丟了
// 看一下跨日重新整理會不會抓到新的車資訊，會的話只要在訂票頁面 reload 然後更新到想搶的車次和票就可以了

const buyTicket =()=>{

    let idNumber = document.querySelectorAll('.idmember.pid.form-input')
    
    idNumber[0].value = 'H124528478'
    
    let addBut = document.querySelectorAll('.add')
    
    // 看要幾張票
    addBut[0].click()
    addBut[0].click()
    
    
    
    const fillValidate = ()=>{
        let validate = document.querySelectorAll('.recaptcha-checkbox-checkmark')
        console.log(validate);
        
        if (validate.length > 0 ){
        
            validate[0].click()
            // 驗證要花時間
        
            
        }else{
            return setTimeout(() => { fillValidate() }, 1000)
        }
    }
    fillValidate()
    

    document.onkeydown = function (e) {  //對整個頁面文件監聽 
        if (e.keyCode == 13) {

            
            let submit = document.querySelectorAll('.btn.btn-3d')
            submit[0].click()

            
            

        }
    };


   
}

window.onload = buyTicket
