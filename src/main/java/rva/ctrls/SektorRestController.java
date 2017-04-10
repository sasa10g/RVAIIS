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

import rva.jpa.Sektor;
import rva.reps.SektorRepository;

@RestController
public class SektorRestController {

	@Autowired
	private SektorRepository sektorRepository;

	@RequestMapping(value = "sektori", method = RequestMethod.GET)
	public Collection<Sektor> getSektori(){
		return sektorRepository.findAll();
	}

	@RequestMapping(value = "sektor/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Sektor> deletepSektor(@PathVariable("id") Integer id,@RequestBody Sektor sektor){
		if(!sektorRepository.exists(sektor.getId()))
			return new ResponseEntity<Sektor>(HttpStatus.NO_CONTENT);
		sektorRepository.delete(sektor);
		return new ResponseEntity<Sektor>(HttpStatus.OK);
	}

	//insert
	@RequestMapping(value = "sektor/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertSektor(@PathVariable("id") Integer id, @RequestBody Sektor sektor){
		if(sektorRepository.exists(sektor.getId()))
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		sektorRepository.save(sektor);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	//update
	@RequestMapping(value = "sektor/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateSektor(@PathVariable("id") Integer id, @RequestBody Sektor sektor){
		if(!sektorRepository.exists(sektor.getId()))
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		sektorRepository.save(sektor);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}