package com.example.notificationtest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {
    @GetMapping
    public String index(){
        return "test";
    }
    @GetMapping("/firebase-messaging-sw.js")
    public String firebaseMessaging(){
        return "firebaseMessaging.js";
    }
}
