
getID("btnSinhNam").addEventListener("click",()=>{
    
let phone = getID("inputNamSinh").value;
var kim = 0; 
var moc = 0; 
var thuy = 0; 
var tho = 0; 
var hoa = 0;
var number ;

for (var i = 0; i < phone.length; i++)
{
    number = parseInt(phone[i]);
    switch (number)
    {
        case 3:
        case 4:
            moc = moc + 1;
            break;
        case 0:
        case 1:
            thuy = thuy + 1;
            break;
        case 2:
        case 5:
        case 8:
            tho = tho + 1;
            break;
        case 6:
        case 7:
            kim = kim + 1;
            break;
        case 9:
            hoa = hoa + 1;
            break;
    }
};
let nguHanh = "";

let soLonNhat = kim;
if (moc > soLonNhat)
{
    soLonNhat = moc;
    nguHanh = "Mộc";
}
if (thuy > soLonNhat)
{
    soLonNhat = thuy;
    nguHanh = "Thủy";
}
if (tho > soLonNhat)
{
    soLonNhat = tho;
    nguHanh = "Thổ";
}
if (hoa > soLonNhat)
{
    soLonNhat = hoa;
    nguHanh = "Hỏa";
}
let tongNguHanh =[{"Kim":kim},{"Mộc":moc},{"Thủy":thuy},{"Hỏa":hoa},{"Thổ":tho}] ;
let tongHanh ={"Kim":kim,"Mộc":moc,"Thủy":thuy,"Hỏa":hoa,"Thổ":tho};
let soSanh =parseInt(soLonNhat);
let noiDUng ="";
if(tongHanh.Kim === soSanh){
    noiDUng ="Hành lớn nhất là Kim"
}
if(tongHanh.Mộc === soSanh){
    noiDUng ="Hành lớn nhất là Mộc"

}

if(tongHanh.Thủy === soSanh){
    noiDUng ="Hành lớn nhất là Thủy"

}

if(tongHanh.Hỏa === soSanh){
    noiDUng ="Hành lớn nhất là Hỏa"

};

if(tongHanh.Thổ === soSanh){
    noiDUng ="Hành lớn nhất là Thổ"

}
getID("loiGiaiChuyenSau").innerHTML = noiDUng;

});
function getID(id) {
    return document.getElementById(id);
  }

