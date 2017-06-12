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

import rva.jpa.Preduzece;
import rva.reps.PreduzeceRepository;

@RestController
public class PreduzeceRestController {

	@Autowired
	private PreduzeceRepository preduzeceRepository;

	@RequestMapping(value = "preduzece", method = RequestMethod.GET)
	public Collection<Preduzece> getPreduzeca(){
		return preduzeceRepository.findAll();
	}
	
	@RequestMapping(value = "preduzece/{id}", method = RequestMethod.GET)
	public ResponseEntity<Preduzece> getPreduzece(@PathVariable("id") Integer id){
		Preduzece preduzece = preduzeceRepository.findOne(id);
		return new ResponseEntity<Preduzece>(preduzece,HttpStatus.OK);
	}

	@RequestMapping(value = "preduzece/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Preduzece> deletepPeduzece(@PathVariable("id") Integer id){
		if(!preduzeceRepository.exists(id))
			return new ResponseEntity<Preduzece>(HttpStatus.NO_CONTENT);
		preduzeceRepository.delete(id);
		return new ResponseEntity<Preduzece>(HttpStatus.OK);
	}

	//insert
	@RequestMapping(value = "preduzece/{id}", method = RequestMethod.POST)
	public ResponseEntity<Void> insertPreduzece(@PathVariable("id") Integer id, @RequestBody Preduzece preduzece){
		if(preduzeceRepository.exists(preduzece.getId()))
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		preduzeceRepository.save(preduzece);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	//update
	@RequestMapping(value = "preduzece/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Void> updatePreduzece(@PathVariable("id") Integer id, @RequestBody Preduzece preduzece){
		if(!preduzeceRepository.exists(preduzece.getId()))
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		preduzeceRepository.save(preduzece);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}