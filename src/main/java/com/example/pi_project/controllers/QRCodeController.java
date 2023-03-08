package com.example.pi_project.controllers;

import com.example.pi_project.entities.Contract;
import com.example.pi_project.services.ContractService;
import com.example.pi_project.services.IContractService;
import com.google.zxing.qrcode.encoder.QRCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStream;


@RestController
@RequestMapping("/qrcode")
public class QRCodeController {

    //private static  String codeText;

    //private  String codeTextx="";

@Autowired
    IContractService contractService;

    /*
            ( GET REQUEST ) :
               http://localhost:8080/genrateAndDownloadQRCode/..../350/350
    */

    //private static final String QR_CODE_IMAGE_PATH = "./src/main/resources/QRCode.png";



    @GetMapping("/rania")
    public String index(ModelMap modelMap){
        modelMap.put("codeTextx", contractService.getAllContracts());
        return "codeTextx";
    }

    // @GetMapping("/AllContracts")
    //    @ResponseBody
    //    public List<Contract> getAllContracts(){
    //        return contractService.getAllContracts();
    //    }

    //@PostMapping("/contract")
    //public void qrCode(@RequestBody Contract contract, HttpServletResponse response) throws Exception{
      //  response.setContentType("image/png");
       // OutputStream outputStream=response.getOutputStream();
        //outputStream.write(QRCodeGenerator.getQRCodeImage(contract.getContractInformation(),200,200));
        //outputStream.flush();
       // outputStream.close();
    //}
    //




}









// private static final String GOLD_IMAGE_PATH = "./src/main/mybadges/goldbadge.png";
//private static final String SILVER_IMAGE_PATH = "i.imgur.com/lTZHFRk.png";
// private static final String BRONZE_IMAGE_PATH = "file:///C:/Users/medaminebt/Downloads/SPRING%20QR%20CODE%20BADGES/GOLD%20BADGE.png";
//private static final String uploaduri = "https://api.anonfiles.com/v2/QR_CODE_IMAGE_PATH/username4321/info";
// private static final String SILVER_IMAGE_PATH = "i.imgur.com/lTZHFRk.png";

//https://imgur.com/a/8oOyZcv
//  GOLD : i.imgur.com/XtkkmCb.png
// SILVER : i.imgur.com/7gPz14Y.png
// BRONZE : i.imgur.com/FmSQbn0.png

