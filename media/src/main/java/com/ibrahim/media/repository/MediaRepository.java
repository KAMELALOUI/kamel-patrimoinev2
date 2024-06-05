package com.ibrahim.media.repository;

import com.ibrahim.media.models.Media;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository

public interface MediaRepository extends JpaRepository<Media, Long> {


}
