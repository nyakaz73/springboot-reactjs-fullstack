package com.stackdev.nyakaz.springbootreactjsfullstack;

import com.stackdev.nyakaz.springbootreactjsfullstack.models.User;
import com.stackdev.nyakaz.springbootreactjsfullstack.repositories.UserRepository;
import org.junit.Test;
import static org.assertj.core.api.Assertions.assertThat;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RunWith(SpringRunner.class)
@DataJpaTest
public class UserTests {
    @Autowired
    private TestEntityManager entityManager;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void test_save_user(){
        User user = new User();
        user.setName("John");
        user.setSurname("John");
        user.setEmail("john@gmail.com");
        user.setUsername("johny123");
        user.setPassword("some-strong-password");
        entityManager.persist(user);

        assertThat(user).hasFieldOrPropertyWithValue("name","John");
        assertThat(user).hasFieldOrPropertyWithValue("email","john@gmail.com");
        assertThat(user).hasFieldOrPropertyWithValue("username","johny123");

    }

    @Test
    public void test_get_users(){
        User user = new User();
        user.setName("John");
        user.setSurname("John");
        user.setEmail("john@gmail.com");
        user.setUsername("johny123");
        user.setPassword("some-strong-password");
        entityManager.persist(user);

        User user2 = new User();
        user2.setName("James");
        user2.setSurname("Gordon");
        user2.setEmail("james@gmail.com");
        user2.setUsername("jimmy");
        user2.setPassword("some-strong-password");
        entityManager.persist(user2);

        List<User> users = new ArrayList<>(userRepository.findAll());
        assertThat(users).hasSize(2).contains(user,user2);
    }

    @Test
    public void test_get_user(){
        User user = new User();
        user.setName("John");
        user.setSurname("John");
        user.setEmail("john@gmail.com");
        user.setUsername("johny123");
        user.setPassword("some-strong-password");
        entityManager.persist(user);

        User user2 = new User();
        user2.setName("James");
        user2.setSurname("Gordon");
        user2.setEmail("james@gmail.com");
        user2.setUsername("jimmy");
        user2.setPassword("some-strong-password2");
        entityManager.persist(user2);

        User user3 = new User();
        user3.setName("Mary");
        user3.setSurname("Jane");
        user3.setEmail("mary@gmail.com");
        user3.setUsername("marry");
        user3.setPassword("some-strong-password3");
        entityManager.persist(user3);

        User person = userRepository.findById(user3.getId()).get();

        assertThat(person.getName()).isEqualTo(user3.getName());
        assertThat(person.getSurname()).isEqualTo("Jane");
    }
    
    @Test
    public void test_update_user(){

        User user = new User();
        user.setName("John");
        user.setSurname("John");
        user.setEmail("john@gmail.com");
        user.setUsername("johny123");
        user.setPassword("some-strong-password");
        entityManager.persist(user);

        User newUser = new User();
        newUser.setName("James");
        newUser.setSurname("Gordon");
        newUser.setEmail("james@gmail.com");
        newUser.setUsername("jimmy");
        newUser.setPassword("some-strong-password2");

        User oldUser = userRepository.findById(user.getId()).get();
        oldUser.setName(newUser.getName());
        oldUser.setSurname(newUser.getSurname());
        oldUser.setEmail(newUser.getEmail());
        oldUser.setUsername(newUser.getUsername());
        oldUser.setPassword(newUser.getPassword());

        entityManager.persist(oldUser);

        User updatedUser = userRepository.findById(user.getId()).get();

        assertThat(updatedUser.getName()).isEqualTo(newUser.getName());
        assertThat(updatedUser.getSurname()).isEqualTo("Gordon");

    }

    @Test
    public void test_delete_users(){
        User user = new User();
        user.setName("John");
        user.setSurname("John");
        user.setEmail("john@gmail.com");
        user.setUsername("johny123");
        user.setPassword("some-strong-password");
        entityManager.persist(user);

        User newUser = new User();
        newUser.setName("James");
        newUser.setSurname("Gordon");
        newUser.setEmail("james@gmail.com");
        newUser.setUsername("jimmy");
        newUser.setPassword("some-strong-password2");
        entityManager.persist(newUser);

        List<User> users = userRepository.findAll();

        assertThat(users).hasSize(2).contains(user,newUser);

        userRepository.deleteAll();

        assertThat(userRepository.findAll()).isEmpty();

    }






}
