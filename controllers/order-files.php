<?php
        //$cFile = curl_file_create($file_name_with_full_path);
        //$post = array('name' => '1.txt','data'=> $cFile);

        $data = array("name" => "filename.txt", "data" => "VGVzdA==");                                                                    
        $data_string = json_encode($data); 

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "http://185.47.204.186:44981/API/hs/PublicOrdersAPI/order-files");
        curl_setopt($ch, CURLOPT_HTTPHEADER, array("accept: application/json", 'Content-Type: application/json' ,  "Authorization: Bearer 2ea1d8d4-d8b7-49ff-96f4-7fe4b3d91cbd" ));
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        $output = curl_exec($ch);
        curl_close($ch);   
        
        print_r($output);
        echo 123;
        

?>