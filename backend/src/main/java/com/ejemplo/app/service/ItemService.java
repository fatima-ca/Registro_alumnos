package com.ejemplo.app.service;

import com.ejemplo.app.model.Item;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Value("${app.data.path}")
    private String dataPath;

    private final ObjectMapper mapper = new ObjectMapper();

    public List<Item> getAll() throws Exception {
        File file = new File(dataPath);
        if (!file.exists()) return new ArrayList<>();
        return mapper.readValue(file, new TypeReference<List<Item>>() {});
    }

    public Item save(Item item) throws Exception {
        List<Item> items = getAll();
        long nextId = items.stream().mapToLong(i -> i.getId() == null ? 0 : i.getId()).max().orElse(0) + 1;
        item.setId(nextId);
        items.add(item);
        File file = new File(dataPath);
        file.getParentFile().mkdirs();
        mapper.writeValue(file, items);
        return item;
    }
}