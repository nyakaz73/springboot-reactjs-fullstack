package com.stackdev.nyakaz.springbootreactjsfullstack.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.xml.ws.RequestWrapper;

@Controller
public class WebMainController {
    @RequestMapping(value = "/")
    public String index(){
        return "index";
    }
}
