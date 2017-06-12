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

import rva.jpa.Obrazovanje;
import rva.reps.ObrazovanjeRepository;

@RestController
public class ObrazovanjeRestController {

	@Autowired
	private ObrazovanjeRepository obrazovanjeRepository;

	@RequestMapping(value = "obrazovanje", method = RequestMethod.GET)
	public Collection<Obrazovanje> getObrazovanja(){
		return obrazovanjeRepository.findAll();
	}
	
	@RequestMapping(value = "obrazovanje/{id}", method = RequestMethod.GET)
	public ResponseEntity<Obrazovanje> getObrazovanje(@PathVariable("id") Integer id){
		Obrazovanje obrazovanje = obrazovanjeRepository.findOne(id);
		return new ResponseEntity<Obrazovanje>(obrazovanje,HttpStatus.OK);
	}

	@RequestMapping(value = "obrazovanje/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Obrazovanje> deleteObrazovanje(@PathVariable("id") Integer id){
		if(!obrazovanjeRepository.exists(id))
			return new ResponseEntity<Obrazovanje>(HttpStatus.NO_CONTENT);
		obrazovanjeRepository.delete(id);
		return new ResponseEntity<Obrazovanje>(HttpStatus.OK);
	}

	//insert
	@RequestMapping(value = "obrazovanje/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertObrazovanje(@PathVariable("id") Integer id, @RequestBody Obrazovanje obrazovanje){
		if(obrazovanjeRepository.exists(obrazovanje.getId()))
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		obrazovanjeRepository.save(obrazovanje);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	//update
	@RequestMapping(value = "obrazovanje/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> updateObrazovanje(@PathVariable("id") Integer id, @RequestBody Obrazovanje obrazovanje){
		if(!obrazovanjeRepository.exists(obrazovanje.getId()))
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		obrazovanjeRepository.save(obrazovanje);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}