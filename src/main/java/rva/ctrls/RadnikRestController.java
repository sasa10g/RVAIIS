package rva.ctrls;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import rva.jpa.Radnik;
import rva.reps.RadnikRepository;

@RestController
public class RadnikRestController {

	@Autowired
	private RadnikRepository radnikRepository;

	@RequestMapping(value = "radnici", method = RequestMethod.GET)
	public Collection<Radnik> getRadnici(){
		return radnikRepository.findAll();
	}

	@RequestMapping(value = "preduzece/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Radnik> deletepRadnik(@PathVariable("id") Integer id,@RequestBody Radnik radnik){
		if(!radnikRepository.exists(radnik.getId()))
			return new ResponseEntity<Radnik>(HttpStatus.NO_CONTENT);
		radnikRepository.delete(radnik);
		return new ResponseEntity<Radnik>(HttpStatus.OK);
	}

	//insert
	@RequestMapping(value = "radnik/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertRadnik(@PathVariable("id") Integer id, @RequestBody Radnik radnik){
		if(radnikRepository.exists(radnik.getId()))
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		radnikRepository.save(radnik);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	//update
	@RequestMapping(value = "radnik/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateRadnik(@PathVariable("id") Integer id, @RequestBody Radnik radnik){
		if(!radnikRepository.exists(radnik.getId()))
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		radnikRepository.save(radnik);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}