package com.ejemplo.app.controller;

import com.ejemplo.app.model.Item;
import com.ejemplo.app.service.ItemService;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/items")
@CrossOrigin(origins = "*")
public class ItemController {
    private final ItemService service;

    public ItemController(ItemService service) { this.service = service; }

    @GetMapping
    public List<Item> getAll() throws Exception { return service.getAll(); }

    @PostMapping
    public Item create(@RequestBody Item item) throws Exception { return service.save(item); }
}