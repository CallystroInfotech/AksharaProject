package com.akshara.mathapp.data.local;


import androidx.room.Database;
import androidx.room.RoomDatabase;

/**
 * Created by Rajeef on 1/1/18
 */

@Database(entities = {User.class}, version = 3, exportSchema = false)
public abstract class AppDatabase extends RoomDatabase {
    public abstract UserDao userDao();
}
