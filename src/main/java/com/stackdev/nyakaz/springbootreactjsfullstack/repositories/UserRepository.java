package com.stackdev.nyakaz.springbootreactjsfullstack.repositories;

import com.stackdev.nyakaz.springbootreactjsfullstack.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
