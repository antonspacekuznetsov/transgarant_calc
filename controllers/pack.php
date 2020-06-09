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
        
        [{
            "name": "коробки",
            "id": "9e937492-6dd3-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Вентиляция ",
            "id": "f708eb63-7fcb-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Ящик",
            "id": "9525015c-807c-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Пластик",
            "id": "7ab51df5-82f1-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Пленка",
            "id": "ca682d54-83aa-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Связки",
            "id": "037043e1-83cf-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Упаковка",
            "id": "d750b875-83d5-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Пачки",
            "id": "e666f608-83d9-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Бочки",
            "id": "b3b0ee34-8464-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Канистра",
            "id": "177d91cd-846e-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Контейнер",
            "id": "09dcf6b7-84ab-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Мешки",
            "id": "fc53d0e8-8537-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Трубы",
            "id": "f54f7bcd-8546-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Барабан",
            "id": "a5ec6f57-8572-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Банки",
            "id": "ec8819a9-8891-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Бухты",
            "id": "2ac6989d-8a09-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Кубы",
            "id": "3e6f79ff-8ac0-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Рулоны",
            "id": "528514d7-8f9c-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Корзины",
            "id": "4a66c1f4-95c8-11ea-a9c9-00155d8e4e03"
        },
        {
            "name": "Балоны",
            "id": "02a2972a-98e3-11ea-a9ca-00155d8e4e03"
        },
        {
            "name": "Кеги",
            "id": "19d38c70-98ff-11ea-a9ca-00155d8e4e03"
        },
        {
            "name": "Катушки",
            "id": "f60e56f7-9e58-11ea-a9ca-00155d8e4e03"
        },
        {
            "name": "Вёдра",
            "id": "16ed157f-9f53-11ea-a9ca-00155d8e4e03"
        },
        {
            "name": "Маты",
            "id": "30d2021f-a55b-11ea-8dba-000c298a28ba"
        },
        {
            "name": "Профиль",
            "id": "a08f0238-a72d-11ea-8dba-000c298a28ba"
        }
    ]
?>