local open = false
AddEventHandler('esx:playerLoaded', function(playerData)
	Citizen.CreateThread(function()
		-- Attendre quelques secondes pour s'assurer que tous les scripts sont chargés
		Wait(5000)
		SetNuiFocus(false, false)
		open = false
	  end)
end)
AddEventHandler('onResourceStop', function(resource)
	if resource == GetCurrentResourceName() then
	  SetNuiFocus(false, false)
	end
end)
Citizen.CreateThread(function()
	SetNuiFocus(false, false)
end)
Citizen.CreateThread(function()
	while true do
		Wait(0)
		if IsControlJustReleased(0, 322) and open or IsControlJustReleased(0, 177) and open then
			SendNUIMessage({
				action = "close"
			})
			open = false
		end
	end
end)
