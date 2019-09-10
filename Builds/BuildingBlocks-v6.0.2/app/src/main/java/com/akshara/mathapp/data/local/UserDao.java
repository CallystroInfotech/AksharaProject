package com.akshara.mathapp.data.local;



import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

/**
 * Created by Rajeef on 1/1/18
 */

@Dao
public interface UserDao {

    @Query("SELECT * FROM user")
    List<User> getAll();

    @Insert
    void insertAll(User... users);

    @Update
    void updateUsers(User... users);

    @Delete
    void delete(User user);

    @Query("SELECT * FROM user WHERE name LIKE :name AND "
            + "phone LIKE :phone LIMIT 1")
    User findBySignInCred(String name, String phone);


}
