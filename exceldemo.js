const exceljs=require("exceljs")
async function writeExcelFile(filepath,searchvalue,changevalue){
    const workbook=new exceljs.Workbook()
await workbook.xlsx.readFile(filepath)
const worksheet=workbook.getWorksheet("Sheet1")
const output1=await readExcelFile(worksheet,searchvalue)
const cell=worksheet.getCell(output1.row,output1.col+2)
cell.value=changevalue
await workbook.xlsx.writeFile(filepath)
}
async function readExcelFile(worksheet,searchvalue){
let output={row:-1,col:-1}
worksheet.eachRow((row,rownumber)=>{
    row.eachCell((cell,colnumber)=>{
        //console.log(cell.value)
        if(cell.value===searchvalue){
            output.row=rownumber
            output.col=colnumber

        }
    })
})
return output
}
writeExcelFile("C:/Users/4alee/Downloads/Obsqura Testing (1).xlsx")